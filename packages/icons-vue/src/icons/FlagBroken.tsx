// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlagBrokenSvg from '@ant-design/icons-svg/lib/asn/FlagBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlagBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlagBroken: FlagBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagBrokenSvg}></AntdIcon>;
};

FlagBroken.displayName = 'FlagBroken';
FlagBroken.inheritAttrs = false;
export default FlagBroken;