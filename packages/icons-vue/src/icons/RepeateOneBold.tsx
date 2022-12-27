// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateOneBoldSvg from '@ant-design/icons-svg/lib/asn/RepeateOneBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateOneBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateOneBold: RepeateOneBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateOneBoldSvg}></AntdIcon>;
};

RepeateOneBold.displayName = 'RepeateOneBold';
RepeateOneBold.inheritAttrs = false;
export default RepeateOneBold;