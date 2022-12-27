// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNormalBulkSvg from '@ant-design/icons-svg/lib/asn/DirectNormalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNormalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNormalBulk: DirectNormalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNormalBulkSvg}></AntdIcon>;
};

DirectNormalBulk.displayName = 'DirectNormalBulk';
DirectNormalBulk.inheritAttrs = false;
export default DirectNormalBulk;