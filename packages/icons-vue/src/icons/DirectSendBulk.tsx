// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectSendBulkSvg from '@ant-design/icons-svg/lib/asn/DirectSendBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectSendBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectSendBulk: DirectSendBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectSendBulkSvg}></AntdIcon>;
};

DirectSendBulk.displayName = 'DirectSendBulk';
DirectSendBulk.inheritAttrs = false;
export default DirectSendBulk;