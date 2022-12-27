// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/CallAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallAddTwoTone: CallAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallAddTwoToneSvg}></AntdIcon>;
};

CallAddTwoTone.displayName = 'CallAddTwoTone';
CallAddTwoTone.inheritAttrs = false;
export default CallAddTwoTone;