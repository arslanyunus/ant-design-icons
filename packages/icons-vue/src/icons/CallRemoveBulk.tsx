// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/CallRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallRemoveBulk: CallRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallRemoveBulkSvg}></AntdIcon>;
};

CallRemoveBulk.displayName = 'CallRemoveBulk';
CallRemoveBulk.inheritAttrs = false;
export default CallRemoveBulk;