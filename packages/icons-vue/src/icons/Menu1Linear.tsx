// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Menu1LinearSvg from '@ant-design/icons-svg/lib/asn/Menu1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Menu1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Menu1Linear: Menu1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Menu1LinearSvg}></AntdIcon>;
};

Menu1Linear.displayName = 'Menu1Linear';
Menu1Linear.inheritAttrs = false;
export default Menu1Linear;