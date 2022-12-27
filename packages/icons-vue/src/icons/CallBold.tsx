// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallBoldSvg from '@ant-design/icons-svg/lib/asn/CallBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallBold: CallBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallBoldSvg}></AntdIcon>;
};

CallBold.displayName = 'CallBold';
CallBold.inheritAttrs = false;
export default CallBold;