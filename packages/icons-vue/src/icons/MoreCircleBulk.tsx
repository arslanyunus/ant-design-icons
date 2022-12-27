// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreCircleBulkSvg from '@ant-design/icons-svg/lib/asn/MoreCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreCircleBulk: MoreCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreCircleBulkSvg}></AntdIcon>;
};

MoreCircleBulk.displayName = 'MoreCircleBulk';
MoreCircleBulk.inheritAttrs = false;
export default MoreCircleBulk;