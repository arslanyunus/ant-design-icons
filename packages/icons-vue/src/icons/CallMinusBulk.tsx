// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallMinusBulkSvg from '@ant-design/icons-svg/lib/asn/CallMinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallMinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallMinusBulk: CallMinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallMinusBulkSvg}></AntdIcon>;
};

CallMinusBulk.displayName = 'CallMinusBulk';
CallMinusBulk.inheritAttrs = false;
export default CallMinusBulk;