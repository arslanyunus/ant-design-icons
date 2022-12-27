// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartTickBulkSvg from '@ant-design/icons-svg/lib/asn/HeartTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartTickBulk: HeartTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartTickBulkSvg}></AntdIcon>;
};

HeartTickBulk.displayName = 'HeartTickBulk';
HeartTickBulk.inheritAttrs = false;
export default HeartTickBulk;