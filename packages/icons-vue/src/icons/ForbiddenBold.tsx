// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForbiddenBoldSvg from '@ant-design/icons-svg/lib/asn/ForbiddenBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForbiddenBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForbiddenBold: ForbiddenBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForbiddenBoldSvg}></AntdIcon>;
};

ForbiddenBold.displayName = 'ForbiddenBold';
ForbiddenBold.inheritAttrs = false;
export default ForbiddenBold;