import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import './MegaMenu.css';
import { Link } from 'react-router-dom';
import NavBtn from './NavBtn';

class MegaMenu extends Component {

  
  static defaultProps = {
    id: null,
    model: null,
    style: null,
    className: null,
    orientation: 'horizontal'
  };

  static propTypes = {
      id: PropTypes.string,
    //   model: PropTypes.array,
      style: PropTypes.object,
      className: PropTypes.string,
      orientation: PropTypes.string
  };

  constructor(props) {
      super(props);
      this.state = {
          activeItem: null
      }
      this.onLeafClick = this.onLeafClick.bind(this);
  }

  onLeafClick(event, item) {
      if (item.disabled) {
          event.preventDefault();
          return;
      }

      if (!item.url) {
          event.preventDefault();
      }

      if (item.command) {
          item.command({
              originalEvent: event,
              item: item
          });
      }

      this.setState({
          activeItem: null
      });
  }

  onCategoryMouseEnter(event, item) {
      if (item.disabled) {
          event.preventDefault();
          return;
      }

      if (this.state.activeItem) {
          this.setState({
              activeItem: item
          });
      }
  }

  onCategoryClick(event, item) {
      if (item.disabled) {
          event.preventDefault();
          return;
      }

      if (!item.url) {
          event.preventDefault();
      }

      if (item.command) {
          item.command({
              originalEvent: event,
              item: this.props.item
          });
      }

      if (item.items) {
          if (this.state.activeItem && this.state.activeItem === item) {
              this.setState({
                  activeItem: null
              });
          }
          else {
              this.setState({
                  activeItem: item
              });
          }
      }

      event.preventDefault();
  }

  isHorizontal() {
      return this.props.orientation === 'horizontal';
  }

  isVertical() {
      return this.props.orientation === 'vertical';
  }

  getColumnClassName(category) {
      let length = category.items ? category.items.length: 0;
      let columnClass;

      switch(length) {
          case 2:
              columnClass= 'col-6';
          break;

          case 3:
              columnClass= 'col-4';
          break;

          case 4:
              columnClass= 'col-3';
          break;

          case 6:
              columnClass= 'col-2';
          break;

          default:
              columnClass= 'col-12';
          break;
      }

      return columnClass;
  }

  componentDidMount() {
      if (!this.documentClickListener) {
          this.documentClickListener = (event) => {
              if (this.container && !this.container.contains(event.target)) {
                  this.setState({activeItem: null});
              }
          };

          document.addEventListener('click', this.documentClickListener);
      }
  }

  componentWillUnmount() {
      if (this.documentClickListener) {
          document.removeEventListener('click', this.documentClickListener);
          this.documentClickListener = null;
      }
  }

  renderSeparator(index) {
      return (
          <li key={'separator_' + index} className="p-menu-separator" role="separator"></li>
      );
  }

  renderSubmenuIcon(item) {
      if (item.items) {
          const className = classNames('p-submenu-icon pi', {'pi-angle-down': this.isHorizontal(), 'pi-angle-right': this.isVertical()});

          return (
              <span className={className}></span>
          );
      }

      return null;
  }

  renderSubmenuItem(item, index) {
      if (item.separator) {
          return this.renderSeparator(index);
      } else {
          const className = classNames('p-menuitem', item.className);
          const linkClassName = classNames('p-menuitem-link', {'p-disabled': item.disabled});
          const iconClassName = classNames(item.icon, 'p-menuitem-icon');
          const icon = item.icon && <span className={iconClassName}></span>;
          const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
          let content = (
              <a href={item.url || '/'} 
                 className={linkClassName} 
                 target={item.target} 
                 onClick={(event) => this.onLeafClick(event, item)} 
                 role="menuitem">
                  {icon}
                  {label}
              </a>
          );

          return (
              <li key={item.label + '_' + index} 
              className={className} 
              style={item.style} 
              role="none">
                  {content}
              </li>
          );
      }
  }

  renderSubmenu(submenu) {
      const className = classNames('p-megamenu-submenu-header', {'p-disabled': submenu.disabled}, submenu.className);
      const items = submenu.items.map((item, index) => {
          return this.renderSubmenuItem(item, index);
      });

      return items;
  }

  renderSubmenus(column) {
      return (
          column.map((submenu, index) => {
              return this.renderSubmenu(submenu, index);
          })
      );
  }

  renderColumn(category, column, index, columnClassName) {
      const submenus = this.renderSubmenu(column);
      const className = classNames('dropdown-item',columnClassName)

      return (
          <div key={category.label + '_column_' + index} className={className}>
              <div className="p-megamenu-submenu" role="menu">
                  {submenus}
              </div>
          </div>
      );
  }

  renderColumns(category) {
      if (category.items) {
          const columnClassName = this.getColumnClassName(category);

          return (
              category.items.map((column, index) => {
                  return this.renderColumn(category, column, index, columnClassName);
              })
          );
      }

      return null;
  }

  renderCategoryPanel(category) {
      if (category.items) {
        const columns = this.renderColumns(category);

        return (
            <div className="dropdown-menu show">
                {columns}
            </div>
        );
      }

      return null;
  }

  renderCategory(category, index) {
      const className = classNames('dropdown', {'p-menuitem-active': category === this.state.activeItem}, category.className);
      const linkClassName = classNames('p-menuitem-link', {'p-disabled': category.disabled});
      const iconClassName = classNames('p-menuitem-icon', category.icon);
      const icon = category.icon && <span className={iconClassName}></span>;
      const label = category.label && <span className="p-menuitem-text">{category.label}</span>;
      const submenuIcon = this.renderSubmenuIcon(category);
      const panel = () => {
        if (this.state.activeItem) {
            return this.renderCategoryPanel(category);
        } else {
            return null;
        }
      };
        

      return (
          <NavBtn key={category.label + '_' + index} 
            className={className}
            onMouseEnter={e => this.onCategoryMouseEnter(e, category)} >
            <Link to={category.url || '/'} 
            className={linkClassName} 
            target={category.target} 
            onClick={e => this.onCategoryClick(e, category)}
            aria-haspopup={category.items != null} 
            aria-expanded="false">
                {icon}
                {label}
                {submenuIcon}
            </Link>
            {panel()}
          </NavBtn>
      );
  }

  renderMenu() {
      if (this.props.model) {
        return this.renderCategory(this.props.model);
      }

      return null;
  }


  render() {
    const menu = this.renderMenu();
    console.log(this.state.activeItem)
    return menu;
  }
}

export default MegaMenu;  