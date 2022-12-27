// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DislikeBoldSvg from '@ant-design/icons-svg/lib/asn/DislikeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DislikeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DislikeBold: DislikeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeBoldSvg}></AntdIcon>;
};

DislikeBold.displayName = 'DislikeBold';
DislikeBold.inheritAttrs = false;
export default DislikeBold;