// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoonBrokenSvg from '@ant-design/icons-svg/lib/asn/MoonBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoonBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoonBroken: MoonBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonBrokenSvg}></AntdIcon>;
};

MoonBroken.displayName = 'MoonBroken';
MoonBroken.inheritAttrs = false;
export default MoonBroken;