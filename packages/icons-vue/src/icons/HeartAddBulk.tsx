// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartAddBulkSvg from '@ant-design/icons-svg/lib/asn/HeartAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartAddBulk: HeartAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartAddBulkSvg}></AntdIcon>;
};

HeartAddBulk.displayName = 'HeartAddBulk';
HeartAddBulk.inheritAttrs = false;
export default HeartAddBulk;