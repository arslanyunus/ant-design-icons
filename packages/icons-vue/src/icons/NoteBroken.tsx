// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteBrokenSvg from '@ant-design/icons-svg/lib/asn/NoteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteBroken: NoteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteBrokenSvg}></AntdIcon>;
};

NoteBroken.displayName = 'NoteBroken';
NoteBroken.inheritAttrs = false;
export default NoteBroken;