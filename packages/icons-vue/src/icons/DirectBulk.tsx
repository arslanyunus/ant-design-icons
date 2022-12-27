// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectBulkSvg from '@ant-design/icons-svg/lib/asn/DirectBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectBulk: DirectBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectBulkSvg}></AntdIcon>;
};

DirectBulk.displayName = 'DirectBulk';
DirectBulk.inheritAttrs = false;
export default DirectBulk;