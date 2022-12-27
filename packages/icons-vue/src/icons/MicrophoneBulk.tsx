// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneBulkSvg from '@ant-design/icons-svg/lib/asn/MicrophoneBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneBulk: MicrophoneBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneBulkSvg}></AntdIcon>;
};

MicrophoneBulk.displayName = 'MicrophoneBulk';
MicrophoneBulk.inheritAttrs = false;
export default MicrophoneBulk;