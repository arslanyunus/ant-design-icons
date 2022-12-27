// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PeopleLinearSvg from '@ant-design/icons-svg/lib/asn/PeopleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PeopleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PeopleLinear: PeopleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PeopleLinearSvg}></AntdIcon>;
};

PeopleLinear.displayName = 'PeopleLinear';
PeopleLinear.inheritAttrs = false;
export default PeopleLinear;