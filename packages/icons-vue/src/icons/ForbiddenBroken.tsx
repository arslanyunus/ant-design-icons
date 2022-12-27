// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForbiddenBrokenSvg from '@ant-design/icons-svg/lib/asn/ForbiddenBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForbiddenBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForbiddenBroken: ForbiddenBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForbiddenBrokenSvg}></AntdIcon>;
};

ForbiddenBroken.displayName = 'ForbiddenBroken';
ForbiddenBroken.inheritAttrs = false;
export default ForbiddenBroken;