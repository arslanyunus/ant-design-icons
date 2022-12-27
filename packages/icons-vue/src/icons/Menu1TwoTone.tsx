// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Menu1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Menu1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Menu1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Menu1TwoTone: Menu1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Menu1TwoToneSvg}></AntdIcon>;
};

Menu1TwoTone.displayName = 'Menu1TwoTone';
Menu1TwoTone.inheritAttrs = false;
export default Menu1TwoTone;