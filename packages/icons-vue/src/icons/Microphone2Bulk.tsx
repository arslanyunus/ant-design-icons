// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Microphone2BulkSvg from '@ant-design/icons-svg/lib/asn/Microphone2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Microphone2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Microphone2Bulk: Microphone2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Microphone2BulkSvg}></AntdIcon>;
};

Microphone2Bulk.displayName = 'Microphone2Bulk';
Microphone2Bulk.inheritAttrs = false;
export default Microphone2Bulk;