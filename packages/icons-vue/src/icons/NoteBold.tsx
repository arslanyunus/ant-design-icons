// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteBoldSvg from '@ant-design/icons-svg/lib/asn/NoteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteBold: NoteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteBoldSvg}></AntdIcon>;
};

NoteBold.displayName = 'NoteBold';
NoteBold.inheritAttrs = false;
export default NoteBold;