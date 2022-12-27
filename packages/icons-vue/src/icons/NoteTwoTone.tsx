// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteTwoToneSvg from '@ant-design/icons-svg/lib/asn/NoteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteTwoTone: NoteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteTwoToneSvg}></AntdIcon>;
};

NoteTwoTone.displayName = 'NoteTwoTone';
NoteTwoTone.inheritAttrs = false;
export default NoteTwoTone;