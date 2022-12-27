// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallBulkSvg from '@ant-design/icons-svg/lib/asn/CallBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallBulk: CallBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallBulkSvg}></AntdIcon>;
};

CallBulk.displayName = 'CallBulk';
CallBulk.inheritAttrs = false;
export default CallBulk;