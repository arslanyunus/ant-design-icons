// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallAddBoldSvg from '@ant-design/icons-svg/lib/asn/CallAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallAddBold: CallAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallAddBoldSvg}></AntdIcon>;
};

CallAddBold.displayName = 'CallAddBold';
CallAddBold.inheritAttrs = false;
export default CallAddBold;