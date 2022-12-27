// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send1BoldSvg from '@ant-design/icons-svg/lib/asn/Send1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send1Bold: Send1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send1BoldSvg}></AntdIcon>;
};

Send1Bold.displayName = 'Send1Bold';
Send1Bold.inheritAttrs = false;
export default Send1Bold;