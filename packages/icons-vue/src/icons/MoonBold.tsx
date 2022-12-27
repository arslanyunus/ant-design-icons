// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoonBoldSvg from '@ant-design/icons-svg/lib/asn/MoonBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoonBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoonBold: MoonBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonBoldSvg}></AntdIcon>;
};

MoonBold.displayName = 'MoonBold';
MoonBold.inheritAttrs = false;
export default MoonBold;