// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateOneTwoToneSvg from '@ant-design/icons-svg/lib/asn/RepeateOneTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateOneTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateOneTwoTone: RepeateOneTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateOneTwoToneSvg}></AntdIcon>;
};

RepeateOneTwoTone.displayName = 'RepeateOneTwoTone';
RepeateOneTwoTone.inheritAttrs = false;
export default RepeateOneTwoTone;