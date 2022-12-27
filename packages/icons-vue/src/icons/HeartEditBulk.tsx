// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartEditBulkSvg from '@ant-design/icons-svg/lib/asn/HeartEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartEditBulk: HeartEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartEditBulkSvg}></AntdIcon>;
};

HeartEditBulk.displayName = 'HeartEditBulk';
HeartEditBulk.inheritAttrs = false;
export default HeartEditBulk;