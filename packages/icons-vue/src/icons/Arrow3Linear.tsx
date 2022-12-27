// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow3LinearSvg from '@ant-design/icons-svg/lib/asn/Arrow3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow3Linear: Arrow3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow3LinearSvg}></AntdIcon>;
};

Arrow3Linear.displayName = 'Arrow3Linear';
Arrow3Linear.inheritAttrs = false;
export default Arrow3Linear;