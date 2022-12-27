// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CandleOutlineSvg from '@ant-design/icons-svg/lib/asn/CandleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CandleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CandleOutline: CandleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CandleOutlineSvg}></AntdIcon>;
};

CandleOutline.displayName = 'CandleOutline';
CandleOutline.inheritAttrs = false;
export default CandleOutline;