// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateMusicOutlineSvg from '@ant-design/icons-svg/lib/asn/RepeateMusicOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateMusicOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateMusicOutline: RepeateMusicOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateMusicOutlineSvg}></AntdIcon>;
};

RepeateMusicOutline.displayName = 'RepeateMusicOutline';
RepeateMusicOutline.inheritAttrs = false;
export default RepeateMusicOutline;