// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Menu1OutlineSvg from '@ant-design/icons-svg/lib/asn/Menu1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Menu1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Menu1Outline: Menu1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Menu1OutlineSvg}></AntdIcon>;
};

Menu1Outline.displayName = 'Menu1Outline';
Menu1Outline.inheritAttrs = false;
export default Menu1Outline;