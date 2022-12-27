// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow3BoldSvg from '@ant-design/icons-svg/lib/asn/Arrow3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow3Bold: Arrow3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow3BoldSvg}></AntdIcon>;
};

Arrow3Bold.displayName = 'Arrow3Bold';
Arrow3Bold.inheritAttrs = false;
export default Arrow3Bold;