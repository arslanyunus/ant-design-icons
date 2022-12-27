// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ActivityTwoToneSvg from '@ant-design/icons-svg/lib/asn/ActivityTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ActivityTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ActivityTwoTone: ActivityTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ActivityTwoToneSvg}></AntdIcon>;
};

ActivityTwoTone.displayName = 'ActivityTwoTone';
ActivityTwoTone.inheritAttrs = false;
export default ActivityTwoTone;