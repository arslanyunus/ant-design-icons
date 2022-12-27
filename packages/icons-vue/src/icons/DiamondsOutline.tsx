// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiamondsOutlineSvg from '@ant-design/icons-svg/lib/asn/DiamondsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiamondsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiamondsOutline: DiamondsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiamondsOutlineSvg}></AntdIcon>;
};

DiamondsOutline.displayName = 'DiamondsOutline';
DiamondsOutline.inheritAttrs = false;
export default DiamondsOutline;