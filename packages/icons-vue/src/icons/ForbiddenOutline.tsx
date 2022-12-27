// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForbiddenOutlineSvg from '@ant-design/icons-svg/lib/asn/ForbiddenOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForbiddenOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForbiddenOutline: ForbiddenOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForbiddenOutlineSvg}></AntdIcon>;
};

ForbiddenOutline.displayName = 'ForbiddenOutline';
ForbiddenOutline.inheritAttrs = false;
export default ForbiddenOutline;