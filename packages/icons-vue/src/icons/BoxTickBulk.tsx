// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTickBulkSvg from '@ant-design/icons-svg/lib/asn/BoxTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTickBulk: BoxTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTickBulkSvg}></AntdIcon>;
};

BoxTickBulk.displayName = 'BoxTickBulk';
BoxTickBulk.inheritAttrs = false;
export default BoxTickBulk;