// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlarmOutlineSvg from '@ant-design/icons-svg/lib/asn/AlarmOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlarmOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlarmOutline: AlarmOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlarmOutlineSvg}></AntdIcon>;
};

AlarmOutline.displayName = 'AlarmOutline';
AlarmOutline.inheritAttrs = false;
export default AlarmOutline;