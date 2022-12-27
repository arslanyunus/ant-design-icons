// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForbiddenBulkSvg from '@ant-design/icons-svg/lib/asn/ForbiddenBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForbiddenBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForbiddenBulk: ForbiddenBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForbiddenBulkSvg}></AntdIcon>;
};

ForbiddenBulk.displayName = 'ForbiddenBulk';
ForbiddenBulk.inheritAttrs = false;
export default ForbiddenBulk;