// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Menu1BrokenSvg from '@ant-design/icons-svg/lib/asn/Menu1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Menu1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Menu1Broken: Menu1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Menu1BrokenSvg}></AntdIcon>;
};

Menu1Broken.displayName = 'Menu1Broken';
Menu1Broken.inheritAttrs = false;
export default Menu1Broken;