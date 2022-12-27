// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxSendBulkSvg from '@ant-design/icons-svg/lib/asn/DirectboxSendBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxSendBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxSendBulk: DirectboxSendBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxSendBulkSvg}></AntdIcon>;
};

DirectboxSendBulk.displayName = 'DirectboxSendBulk';
DirectboxSendBulk.inheritAttrs = false;
export default DirectboxSendBulk;