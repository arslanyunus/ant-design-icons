// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Menu1BoldSvg from '@ant-design/icons-svg/lib/asn/Menu1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Menu1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Menu1Bold: Menu1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Menu1BoldSvg}></AntdIcon>;
};

Menu1Bold.displayName = 'Menu1Bold';
Menu1Bold.inheritAttrs = false;
export default Menu1Bold;