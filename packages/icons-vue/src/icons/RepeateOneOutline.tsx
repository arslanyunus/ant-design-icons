// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateOneOutlineSvg from '@ant-design/icons-svg/lib/asn/RepeateOneOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateOneOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateOneOutline: RepeateOneOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateOneOutlineSvg}></AntdIcon>;
};

RepeateOneOutline.displayName = 'RepeateOneOutline';
RepeateOneOutline.inheritAttrs = false;
export default RepeateOneOutline;