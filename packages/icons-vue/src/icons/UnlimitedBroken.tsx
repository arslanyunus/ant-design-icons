// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlimitedBrokenSvg from '@ant-design/icons-svg/lib/asn/UnlimitedBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlimitedBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlimitedBroken: UnlimitedBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlimitedBrokenSvg}></AntdIcon>;
};

UnlimitedBroken.displayName = 'UnlimitedBroken';
UnlimitedBroken.inheritAttrs = false;
export default UnlimitedBroken;