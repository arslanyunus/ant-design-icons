// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/CallMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallMinusTwoTone: CallMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallMinusTwoToneSvg}></AntdIcon>;
};

CallMinusTwoTone.displayName = 'CallMinusTwoTone';
CallMinusTwoTone.inheritAttrs = false;
export default CallMinusTwoTone;