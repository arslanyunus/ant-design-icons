// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlurBulkSvg from '@ant-design/icons-svg/lib/asn/BlurBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlurBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlurBulk: BlurBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlurBulkSvg}></AntdIcon>;
};

BlurBulk.displayName = 'BlurBulk';
BlurBulk.inheritAttrs = false;
export default BlurBulk;