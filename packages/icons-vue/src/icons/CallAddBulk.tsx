// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallAddBulkSvg from '@ant-design/icons-svg/lib/asn/CallAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallAddBulk: CallAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallAddBulkSvg}></AntdIcon>;
};

CallAddBulk.displayName = 'CallAddBulk';
CallAddBulk.inheritAttrs = false;
export default CallAddBulk;