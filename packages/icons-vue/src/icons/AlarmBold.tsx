// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlarmBoldSvg from '@ant-design/icons-svg/lib/asn/AlarmBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlarmBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlarmBold: AlarmBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlarmBoldSvg}></AntdIcon>;
};

AlarmBold.displayName = 'AlarmBold';
AlarmBold.inheritAttrs = false;
export default AlarmBold;