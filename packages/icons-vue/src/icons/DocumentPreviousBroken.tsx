// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentPreviousBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentPreviousBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentPreviousBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentPreviousBroken: DocumentPreviousBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentPreviousBrokenSvg}></AntdIcon>;
};

DocumentPreviousBroken.displayName = 'DocumentPreviousBroken';
DocumentPreviousBroken.inheritAttrs = false;
export default DocumentPreviousBroken;