// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSearchBulkSvg from '@ant-design/icons-svg/lib/asn/HeartSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSearchBulk: HeartSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSearchBulkSvg}></AntdIcon>;
};

HeartSearchBulk.displayName = 'HeartSearchBulk';
HeartSearchBulk.inheritAttrs = false;
export default HeartSearchBulk;